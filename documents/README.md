# Course Project Proposal

## Movie info

I plan to create a site that allows users to find information regarding a variety of movies. It will be a list of my favorite, perhaps lesser-known movies (for the kids today at least).

### The ideas
* The movies will be listed in alphabetical order and when clicked (or when clicking a Details button - still TBD) will show various details for the movie such as year, rating, release date, runtime, description, etc.
* If there is no data available for one of the pieces of information, I'll ensure the site handles that gracefully.
* I want to include an option to check off the videos seen so the view will change in some way to alert the user they've already seen a movie but exactly how this looks is still TBD.

### Objective
I love movies and I've seen a ton of them. I think movies are a great way to escape for a couple of hours and not have to think about yourself or anything else and we can all use that on occasion. I want to create a fun site that offers folks a way to make this escape.

### API I plan to use
http://www.omdbapi.com/

### What is SEO and why is it important?
The main reason to have a web presence is for potential users/customers to find what you have to offer. In order for people to do that, sites need to have Search Engine Optimization (SEO) implemented. SEO is used to get search engines to find your site and get it ranked higher than other sites offering similar goods or information. Given the extraordinary number of sites on the web, there can be literally hundreds or thousands that have the same offerings as another site (think Amazon, Walmart, Target, etc.) so it's critical to ensure the site is ranked high in search engine results. The most well-known search engine is Google, but there are others such as Bing, Wiki.com, and even Twitter. These search engines have crawlers that are constantly looking for data on the sites. Search engines are looking for information in a variety of locations on the site such as H tags. Since H tags have six levels (H1 - H6) the most important information should be placed in the H1 tag. There should not be more than one H1 tag on any one page because having more can actually be counterintuitive and cause your SEO ranking to go down rather than up. The distance of pages from the root directory may also be a factor in whether pages get crawled.

It's also important not to try to "trick" the crawlers by adding ghost pages or hidden text on the page to try to improve SEO. Since this has been tried repeatedly, the SEO for a site engaging in this will actually decrease, not increase. Linking to sites outside the site can help SEO go up provided they are legitimate links. It is possible to pay to have the site moved to the top of search results but many consumers/users (myself included) will not click those links. It always feels a bit sketchy to need to pay for results. There are tools to assist with the analysis required to add SEO content to the site. Analytics tools such as Google Analytics will help determine what users are using your site and what they are clicking on once there. Heat Maps can be valuable as well because they indicate where a user is moving their mouse. This can help determine if certain content should be moved higher on the page. If there is content the site creator believes is important or critical to their business and it's never getting looked at, it may be better to move it up on the page.

### Ideal SEO strategy
To create an ideal SEO implementation for my site, I would do the following:
* Be certain I understood my target audience to be and why that's my audience so I ensure my content is speaking to that audience
* Have a good content strategy for my audience
* Understand if my site it sticky. Do I think people will want to come back to it.
* Include a H1 tag on every page (not use lower-level H tags because I wanted a certain look)
* Include at least one H tag on every page (even if not H1)
* Ensure the content in my H tags was more meaningful in the context of what people may be searching for that could lead them to my site
* Be more mindful of the use of social media in the world today and ensure there are buttons to share and social meta tags
* If this were a real site, I would want to invest in analytics tools (and heat maps) to ensure I knew who my users were and what they were doing once on my site (and what they weren't doing)
* Analyze what make good keywords and determine the best for my sites. Determine synonyms, abbreviations of words, plurals, use hyphens, etc. the way real people tend to search for things.
* Potentially invest in A/B and other user testing to ensure that I knew how users were trying to find my site, search for what my site offers, etc.
* I would want to make sure my content loads quickly so users don't find my site and then leave it quickly
* I linked to a couple of high-quality sites but if I were going to do more of that make sure that what I'm linking to is still high-quality isn't more impactful than my own site.

Generally, I would take the time to do the research on my customers and who they are. I would want to make sure I understood how they would not just search for the information on my site but how would they use it. Knowing how they would use it would help ensure that I had a site users returned to and stayed on once there.


### Content Stucture
###### Note: this is for my reference so when I want to go back later to see how I did something (or maybe what I would do differently) I know how the site was put together

| All image assets live in: assets > images |
|-------------------------------------------|

| layouts > default.vue                                                       |
|-----------------------------------------------------------------------------|
| header content (slide show of images at top of all pages, includes styling) |
| navigation (used on all pages, includes styling)                            |

| components (styling included w/ea component) | page/section usage                         |
|----------------------------------------------|--------------------------------------------|
| Accordion.vue                                | trivia                                     |
| Card.vue                                     | stars                                      |
| CardAPI.vue                                  | movies ("world")                           |
| Footer.vue                                   | all pages                                  |
| Images.vue                                   | movies (images of "movies/stars we know")  |
| ImagesMovies.vue                             | movies ("lesser-known")                    |
| Jumbotron.vue                                | home                                       |
| MovieList.vue                                | movies (API call for "world")              |
| MoviesImg.vue                                | movies (images of "movies/stars we know")  |
| Radio.vue                                    | trivia ("how well" below accordion)        |
| SlotsHeader.vue                              | movies (header for "movies/stars we know") |

| mixins    | component usage |
|-----------|-----------------|
| border.js | Images.vue      |

| components/mixins imported into components | import/export                                                                     |
|--------------------------------------------|-----------------------------------------------------------------------------------|
| Accordion.vue                              | self-contained, exported to trivia/index                                          |
| Card.vue                                   | self-contained, exported to stars/index                                           |
| CardAPI.vue                                | import border.js, exported to movies/index for use with images and "world" movies |
| Footer.vue                                 | self-contained, exported to all pages                                             |
| Images.vue                                 | import border.js, exported to movies/index for use with "movies/stars we know"    |
| ImagesMovies.vue                           | self-contained, export to movies/index for list of "lesser-known" movies          |
| Jumbotron.vue                              | self-contained, exported to index (home)                                          |
| MovieList.vue                              | import CardAPI and axios, export to movies/index                                  |
| MoviesImg.vue                              | import Images, SlotsHeader; export to movies/index                                |
| Radio.vue                                  | self-contained, exported to trivia/index                                          |
| SlotsHeader.vue                            | self-contained, exported to MoviesImg                                             |
| border.js                                  | self-contained, exported to CardAPI and Images                                    |

| pages        | components imported                                                               |
|--------------|-----------------------------------------------------------------------------------|
| index        | Jumbotron, Footer                                                                 |
| movies/index | MoviesImg (Images, SlotsHeader), ImagesMovies, MovieList (CardAPI, axios), Footer |
| stars/index  | Card, Footer                                                                      |
| trivia/index | Accordion, Radio, Footer                                                          |
