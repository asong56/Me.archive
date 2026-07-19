# Why I made OhPDF

I originally wanted a lightweight PDF and Epub reader,
and the tool should be single binary executable, lightweight and fast and offline, no account needed and off-cloud.
I always like the direction of "tiny Unix tools".

---

I wanted a reader because SumatraPDF is lightweight but the UIUX is so ugly, not so moder, and also, I read both PDF and Epub.
I was wondering if I could make a more mmodern reader, with some ai workflow such as sumarizing, asking, and I felt like that was a good idea because many people need a reader.
After making the first roadmap, I found that this was not a good product because PDF reading itself is not a big problem.
People can literally open a PDF in a browser, and someone who need a lightweight one may use SumatraPDF and someone who need pro ones can use acrobat.
If I were making a better PDF reader, it cannot answer the question why users might turn to a new reader.
And a lot of products nowadays already have ai, upload one and chat, which can be easily copied, and ai is not what PDF really need.

---

I thought for 2 days and found that the real problem is pdf processing.
Many users open one app just to merge, or delete some pages, which are basic needs but the user experience now is very bad.
When I want to process a PDF, I have to search a tool online and upload my file and do something to it and finally I may download it.
The problem is that there are so many advertisements, and some may have restriction to size, and some may need to pay, and users never know whether their files are kept.
A lot of desktop apps are heavy and slow, having too many utilities and one user may only want to do one thing at one time, not seeing so many buttons.
So OhPDF turned to a workstation instead of a reader.

---

I think OhPDF fits those who met one single and simple issue and want a tool just enough to solve that, so the design is basically a function entry once you open it.
The v0.1.0 can turn image to pdf, watermark, compress, rotate, pdf to image, reorder, encrypt, merge and split.
No history, no account, no cloud because most of the time we only process it and do not need to organize the files.

---

I think OhPDF should develop around decreasing operation setps instead of adding new things.
Such as right click menu because our actual workflow is open file manager, find the pdf file, right click, instead of open the app and find a file.
If ohpdf exists in the menu, it would be more natural. and another is batch processing, because we might want to process 100 PDFs not one by one.
CLI is another direction of OhPDF because CLI could be much lighter.
For example we can enter 
`ohpdf compress input.pdf output.pdf`

Also, pipeline is very useful. sdk is planned later, and people can use python or javascript or other language to use ohpdf.
If many people use ohpdf, it might need a plugin system, because I banned ai and ocr and multi language module in the main executable file.
Because they are too heavy.

---

The future structure might be core, desktop, cli, sdk and plugins.
Some advanced might be  pdf inspector, cleanup, repair and diff, another one might be table of content management because a lot of directories have low quality.
Overall, Ohpdf should not be a second acrobat.. it should be a simple tool, just enough for pdf.
