import { ref } from 'vue'
import { useMarketDepthStore } from '@/stores/market'

const subscribeDepth = () => {
  const marketDepth = useMarketDepthStore()
  const error = ref(null)
  const connection = ref()
  //const data = ref({ a: Array<Array<string>>, b: Array<Array<string>> })

  const connect = (symbol: string) => {
    connection.value = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`
    )
    connection.value.onmessage = function (e: MessageEvent) {
      //data.value = JSON.parse(e.data)
      //marketDepth.update(data.value)
      marketDepth.update(JSON.parse(e.data))
    }

    connection.value.onopen = function () {
      console.log('Successfully connected to the echo websocket server...')
    }
  }

  const closeConnection = () => {
    console.log('connection was closed')
    connection.value.close()
  }

  return { connect, closeConnection, connection }
}

export default subscribeDepth
