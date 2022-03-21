


const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
}


module.exports = {
    scrollTo
}