$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Youtube Music Search",
  "description": "",
  "id": "youtube-music-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13855080059,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should able to click explore page",
  "description": "",
  "id": "youtube-music-search;user-should-able-to-click-explore-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@explore"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I go to youtube music page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be in youtube music page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click explore menu",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "The explore page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I open \"Moods \u0026 genres\" Content Group",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.iOpenBrowser()"
});
formatter.result({
  "duration": 277676096,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.iGoToYoutubeMusicPage()"
});
formatter.result({
  "duration": 121461,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.iShouldBeInYoutubeMusicPage()"
});
formatter.result({
  "duration": 1155648875,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.iClickExploreMenu()"
});
formatter.result({
  "duration": 1185952755,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.theExplorePageIsOpened()"
});
formatter.result({
  "duration": 2392628284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moods \u0026 genres",
      "offset": 8
    }
  ],
  "location": "SearchStep.iOpen(String)"
});
formatter.result({
  "duration": 1233937953,
  "status": "passed"
});
formatter.after({
  "duration": 195513167,
  "status": "passed"
});
});