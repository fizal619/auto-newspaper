class ArticlesController < ApplicationController

  def index

    lastRefresh = Article.first[:created_at]
    articles = []
      if lastRefresh > 12.hours.ago

      # nuke the table
      Article.destroy_all

      # grab the tech page
      response = HTTParty.get('http://www.huffingtonpost.com/news/tech/')
      page = Nokogiri::HTML(response.body)

      # loop through the links and do something.
      links =  page.css('a.read_post_link')
      for link in links do
        # articles.push(link.attributes['href'].value)
        response = HTTParty.get(links[0].attributes['href'].value)
        page = Nokogiri::HTML(response.body)

        # where we'll store the paragraphs
        parsedBody = ''

        #ignore brs and unneded linebreaks?
        page.css('#\31 1256816 > div.entry__container > div > div.entry__body.js-entry-body > div:nth-child(1) > p').children.each {
          |item|
          if item.text != '' && item.text != '\n '
            parsedBody += item.text
          end
        }

        # build and object
        article = {
          title: page.css('h1.headline__title').children[0].text,
          content: parsedBody ,
          link: link
        }
        # pp article[:body]
        articles.push(article)

        #save them to the database
        Article.create(articles)

      end #end for
    end #end if

    render json: Article.all
  end

  def destroy

  end

end
