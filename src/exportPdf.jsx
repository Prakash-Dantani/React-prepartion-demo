import React from 'react'

const exportPdf = async () => {
    const browser = await puppeteer.launch();
    console.log(browser);
    return (
    <div>exportPdf</div>
  )
}

export default exportPdf;