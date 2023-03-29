import PDFfile from '../assets/Resume-Darwin-Fegarido.pdf'

export const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
}

export const downloadPDF = () => {
    window.open(PDFfile, '_blank')
}

