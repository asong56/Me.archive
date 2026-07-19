# Why I made Rudoc

I made rudoc out of a very simple thought that is Pandoc is too heavy and has too many dependents, and I only need very few of them,
small enough too carry and power enough to convert, so I used rust to make a *simple* one, which can operate `txt`, `html`, `markdown`, `pdf`, `json`, `xml`, and `docx`, and also `pptx`.

---

The first version is successful, it is only **4.5 MB** and can convert a **100KB** file in around **20ms**.
The conversion is very stable. When I convert a well-written markdown three times, the outcome is the same.
But the problem is that it need to download typst to operate pdf.
So I planned to merge typst and rudoc, or I may just leave typst aside because pandoc also need typst additionally.

---

I also planned to add some templates for conversion. rudoc should and must support preserving the format of the original file.
And also, printing out a conversion report is a good idea, you only need to add a `-r` after, it will print out something like conversion time, summary, paragraphs: #, headings: #, lists: # and so on, and it should also print out warnings such as 1 floating textbox ignored.
Another thing is that it must follow standard exit code, which supports connection to `powershell`, `python`, `githook` and so on. the templates should be in one additional folder called rudoc-templates, and it might be something like `modern.rutmpl`, `classic.rutmpl`.


> Open, convert, and close it, which is main and only idea of rudoc.
