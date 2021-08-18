const RssParser = require('rss-parser');

const OCTODEX_BASE_URL = 'https://octodex.github.com';

async function fetchAPI() {
  const parser = new RssParser();

  const feed = await parser.parseURL(`${OCTODEX_BASE_URL}/atom.xml`);

  return feed.items.map(item => {
    const result = {
      name: item.title,
      url: item.link,
      snippet: item.contentSnippet,
    };

    // Extract the date of publishing if present
    if (item.pubDate) {
      let split = item.pubDate.indexOf('T');
      if (split > 0) {
        result.published = item.pubDate.substring(0, split);
      } else {
        result.published = item.pubDate;
      }
    }

    // Parse the content so that we can get the URL for the image resource if present
    if (item.content) {
      const image = /\<img src=\"(.*)\"\/\>/gm.exec(item.content);
      if (image) {
        result.image = image[1];
      }
    }

    return result;
  });
}

export async function getOctocats() {
  return await fetchAPI();
}