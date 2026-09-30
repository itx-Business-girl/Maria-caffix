// const API_KEY = import.meta.env.VITE_PEXELS_API_KEY

// export async function getCoffeeImages() {
//   const response = await fetch(
//     'https://api.pexels.com/v1/search?query=coffee&per_page=6',
//     {
//       headers: {
//         Authorization: API_KEY
//       }
//     }
//   )

//   const data = await response.json()

//   console.log(data)

//   return data.photos
// }

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY

export async function getCoffeeImages() {
  const response = await fetch(
    'https://api.pexels.com/v1/search?query=coffee&per_page=12',
    {
      headers: {
        Authorization: API_KEY
      }
    }
  )

  console.log("STATUS:", response.status)

  const data = await response.json()

  console.log("PEXELS DATA:", data)

  return data.photos || []
}