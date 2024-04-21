import { ref } from 'vue'

const getDepth = () => {
  const depth = ref([])
  const error = ref(null)

  const load = async (symbol: string) => {
    try {
      console.log('New request', symbol)
      const data = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}`)
      if (!data.ok) {
        throw Error('no data available')
      }
      depth.value = await data.json()
      if (!depth.value) {
        throw Error('error')
      }
    } catch (err: any) {
      error.value = err.message
    }
  }

  return { depth, error, load }
}

export default getDepth
