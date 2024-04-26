import { ref, watch } from 'vue'
import { useMarketDepthStore } from '@/stores/market'
import getDepth from '../comsolables/getDepth'

const subscribeDepth = () => {
  const marketDepth = useMarketDepthStore()
  const error = ref(null)
  const connection = ref()
  const data = ref({ a: Array<Array<string>>, b: Array<Array<string>>, U: 0 })

  const connect = (symbol: string) => {
    connection.value = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`
    )
    connection.value.onmessage = function (e: MessageEvent) {
      const { load, depth } = getDepth()
      data.value = JSON.parse(e.data)
      console.log(marketDepth.marketDepth.lastUpdateId)
      if (marketDepth.marketDepth.lastUpdateId == 0) {
        console.log('loading')
        load(symbol)
      }

      if (JSON.parse(e.data).u <= marketDepth.marketDepth.lastUpdateId) {
        //Drop any event where u is <= lastUpdateId in the snapshot.
        console.log('dropping')
        return
      }
      if (data.value.U == marketDepth.marketDepth.lastUpdateId + 1) {
        //While listening to the stream, each new event's U should be equal to the previous event's u+1.
        console.log('updated')
        marketDepth.update(JSON.parse(e.data))
      }
      if (
        JSON.parse(e.data).U <= marketDepth.marketDepth.lastUpdateId + 1 &&
        JSON.parse(e.data).u >= marketDepth.marketDepth.lastUpdateId + 1
      ) {
        marketDepth.update(JSON.parse(e.data))
        console.log('should be processed first!')
      }

      watch(depth, () => {
        marketDepth.save(depth.value)
      })
    }

    connection.value.onopen = function () {
      console.log('Successfully connected to the echo websocket server...')
    }
  }

  const closeConnection = () => {
    console.log('connection was closed')
    connection.value.close()
    marketDepth.$reset()
  }

  return { connect, closeConnection, connection }
}

export default subscribeDepth
