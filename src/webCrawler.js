const webCrawler = function (url,  depth = 0,  configuration = 0, politeness = 0){
/* configuration: 
   0 = url list, 
   1 = number of script tags, 
   2 = links to external sites

Tasks:
Accept a URL to begin its crawl - done
Recursively follow links - done
Output the URL of crawled pages - done
Accept an optional configuration object as an argument that will effect the default behavior of the crawler. Consider configuring:
The ability to use getElementsByClassName on any of the pages you visit - omit
The ability to output other kinds of information about the page such as 
	number of script tags, 
  distinct attributes, 
  links to external sites, 
  etc.
The option to crawl breadth first instead of depth first
Limit the depth or breadth of the crawl
Set a revisit or politeness policy
 Refactor the crawler to use web workers 
*/
  let urlList = [url];
  let results = {0: urlList}
  if (configuration === 2) {
  	var externalLinks = [];
    results[2] = externalLinks;
  }
  const crawl = (url, depth,  configuration, politeness) => {
    if (depth > 0) {
      $.get(url)
      .then((data) => {
      let hyperlinks = getHyperlinks(data, configuration);
      let limit = hyperlinks[0].length;
      if (politeness > 0) {
      	limit = politeness;
      }
        for(let i = 0; i < limit; i++) {
          urlList.push(hyperlinks[0][i].href);
          if (configuration === 2 && !hyperlinks[0][i].href.includes(urlList[0])) {
          	externalLinks.push(hyperlinks[0][i].href);
          }
          crawl(hyperlinks[0][i].href, depth - 1);
        }
        if (configuration === 1) {
          results[1] = hyperlinks[1];
        }
        return;
      });
    } else { 
      return;
    }
  }
	crawl(url, depth,  configuration, politeness);
  return results;
}

const getHyperlinks = (htmlObject, configuration) => {
	let result = [];
  let currentlyCrawling = document.createElement('div');
  currentlyCrawling.innerHTML = htmlObject;
  result.push(currentlyCrawling.getElementsByTagName('a'));
  if (configuration === 1) {
    result.push(currentlyCrawling.getElementsByTagName('script').length)
  }
  return result;
}

console.log('RESULT ', webCrawler("https://www.msn.com/", 1, 2, 100));
