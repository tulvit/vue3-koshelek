import { ref } from 'vue'
import { useMarketDepthStore } from '@/stores/market'

const subscribeDepth = () => {
  const marketDepth = useMarketDepthStore()
  const error = ref(null)
  const connection = ref()
  const data = ref({})

  const connect = (symbol: string) => {
    connection.value = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`
    )
    connection.value.onmessage = function (e) {
      data.value = JSON.parse(e.data)
      marketDepth.update(data.value)
    }

    connection.value.onopen = function (e) {
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
