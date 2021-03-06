# Balsamine.be web repo
Balsamine rebuild 2017
![logo-balsa](content/images/logo-balsa-16-17-large.svg)

## Development environment
The new balsamine website is based on [Pelican](https://blog.getpelican.com/), a static site generator. It's built in Python, and thus, we'll use a virtual environment. It also relies on nodejs and npm for the css post-processing.

    $ apt install python3-dev
    $ apt install libjpeg-dev
    $ apt install libpng-dev
    $ apt install npm
    $ apt install nodejs-legacy

    $ npm install

    $ virtualenv --python=python3 venv
    $ . venv/bin/activate
    $ (venv) pip install -r requirements.txt

With the steps above, you should have setup most of the development space needed for this pelican project. Here is what was installed by pip reading requirements.txt:

    pelican==3.7.1
    markdown>=2,<3
    git+https://github.com/aleray/markdown-figures.git

    # For some reasons the pip hosted version contains support for animated images,
    # whereas the github version does not. But is is buggy.
    # Additionally, in the original repo there is a typo in setup.py so installing
    # from my own fork on Github

    #minchin.pelican.plugins.image_process
    git+https://github.com/aleray/minchin.pelican.plugins.image_process.git@2e5aa07

## Running and using pelican
Pelican is a static site generator, built in Python that requires no databases or server-side logic. It expects content in Markdown (or reStructuredText), and handles this content in Jinja2 templates. The documentation for Pelican is well written, it's hosted here: http://docs.getpelican.com/en/stable/

Pelican comes prebuilt with a set of tools to help development and deployment. As it generates a static site, in plain html, we can run the full current website locally during build and development phases. Most of the tools that Pelican ships with are in the Makefile. Most of the configurations are in the file titled pelicanconf.py.

### Expected workflow
The tool expects a simple chain of events: writing content, generating the static site, publishing the resulting html files. The structure of the folders here represent that too: writing content happens in the `/content/` folder. The html files and assets that get generated all reside in the `/output/` folder. When we publish, we're simply copying all the contents of `/output/` to it online destination.

### Generating html
In it's plainest form, one generates html simply by calling pelican, with no arguments.

    $ pelican

If you've changed the default location of the content folder, you can tell pelican to generate from that path as an argument:

    $ pelican content

You can also use the Makefile, which would parse all the configs from pelicanconf.py like this:

    $ make html

But in the case of development work, a watcher tool exists, which will run the html generation whenever content is updated or added, whenever a template is changed, or whenever the css file is touched. This is the best way to work with pelican locally, you call it from the Makefile:

    $ make devserver

The dev server is now also running, so you can visit your website locally at localhost:8000

That should be it to start off.

OSP will most lightly define it's own guidelines for working in templates and css, which will result in other wiki-readme-documents.

### Working on the theme

Templates are managed with Jinja2 http://jinja.pocoo.org/

### Working on the css

We're trying out [postcss](http://postcss.org/) for the management of the css in this project. Postcss translates css with JavaScript, so it's managed with the NodePacketManager `npm`
The repo contains a `package.json` so whomever needs to work on the css must `$ npm install` in the root of the repo.


