import PyPDF2

pdf = open(r'c:\Users\Dell\Downloads\Voltsave_AI_Landing_Page_PRD.pdf', 'rb')
reader = PyPDF2.PdfReader(pdf)
for page in reader.pages:
    print(page.extract_text())
pdf.close()
