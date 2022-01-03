function BTC({ posts }) {
    {posts.map((post) => (
        post.title
    ))}
}


export async function getStaticProps() {
    const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`)
    const posts = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts}, // will be passed to the page component as props
    }
}

export default BTC;