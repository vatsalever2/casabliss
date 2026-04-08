import fitz
import os
from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def extract_and_trim(p, n, o):
    try:
        doc = fitz.open(os.path.join('public/assets', p))
        pix = doc[n].get_pixmap(dpi=150)
        t = 'temp.jpg'
        pix.save(t)
        im = Image.open(t)
        trim(im).save(os.path.join('public/images', o))
        os.remove(t)
    except Exception as e:
        print(f"Error: {e}")

extract_and_trim('墨影系列-44_Storage & Decor.pdf', 0, 'gallery-1.jpg')
extract_and_trim('艾伦斯特-四代艾迪电子画册(4)-45_Bedroom.pdf', 0, 'gallery-2.jpg')
extract_and_trim('（高清)新北美黑胡桃2024（6)-63_Dining.pdf', 0, 'gallery-3.jpg')
