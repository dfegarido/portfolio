import PDFfile from '../assets/Resume-Darwin-Fegarido.pdf'

export const scrollTo = (sectionId) => {
    // Handle both direct refs (old code) and string IDs (new approach)
    if (typeof sectionId === 'string') {
        // It's an ID string
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (sectionId?.current) {
        // It's a ref object (backward compatibility)
        sectionId.current.scrollIntoView({ behavior: 'smooth' });
    }
}

export const downloadPDF = () => {
    window.open(PDFfile, '_blank')
}

