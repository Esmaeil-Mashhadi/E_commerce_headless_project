
const GetData =  async( urlPath:string, urlParam:string) => {

  const res = await fetch(
    `${process.env.WORDPRESS_URL}/${urlPath}?${urlParam}`,
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.WOOCOMMERCE_API_KEY}:${process.env.WOOCOMMERCE_API_SECRET}`
          ).toString("base64"),
      },
    }
  )
  const data = await res.json()
  return data
}

export default GetData
