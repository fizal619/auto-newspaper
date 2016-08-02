class ArticlesController < ApplicationController

  def index
    lastRefresh = Article.first[:created_at]

    puts '====='
    puts lastRefresh
    puts 12.hours.ago
    puts 12.hours.ago > lastRefresh
    puts '====='

    articles = []
    if lastRefresh < 12.hours.ago

      # nuke the table
      Article.destroy_all

      # grab the tech page
      response = HTTParty.get('http://www.huffingtonpost.com/news/tech/')
      page = Nokogiri::HTML(response.body)

      # loop through the links and do something.
      links =  page.css('a.read_post_link')

      for link in links[1..20] do

        # articles.push(link.attributes['href'].value)
        response = HTTParty.get(link.attributes['href'].value)
        page = Nokogiri::HTML(response.body)

        # where we'll store the paragraphs
        parsedBody = ''

        page.css('div.entry__body p').each do |item|
          if item.text != ''
            parsedBody += item.text
          end
        end

        # pop those last two pesky things
        # parsedBody.pop()
        # parsedBody.pop()


        # build and object
        article = {
          title: page.css('h1.headline__title').children[0].text,
          content: parsedBody ,
          link: link
        }
        # pp article[:body]
        articles.push(article)

      end #end for

        #save them to the database
        Article.create(articles)

    end #end if

    render json: Article.all
  end

  def destroy

  end

end
