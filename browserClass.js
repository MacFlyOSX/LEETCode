/*
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

1. BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
2. void visit(string url) Visits url from the current page. It clears up all the forward history.
3. string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
4. string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

Example 1:
Input:
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
Output:
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

Explanation:
BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"

Constraints:
1 <= homepage.length <= 20
1 <= url.length <= 20
1 <= steps <= 100
homepage and url consist of  '.' or lower case English letters.
At most 5000 calls will be made to visit, back, and forward.
*/

/**
 * @param {string} homepage
 */



class Nodes {
    constructor(url) {
      this.url = url;
      this.prev = null;
      this.next = null;
    }
  }

  class BrowserHistory {
    constructor(homepage) {
      this.homepage = new Nodes(homepage); // starts our BrowserHistory instance at homepage node
        this.head = this.homepage
        this.tail = this.homepage
      this.current = this.homepage; // keeps track of current page
    }

    visit = (url) => {
      const visited = new Nodes(url); // instantiates a new node for the newly visited page
      if (this.current.next) {
        let temp = this.current.next;
        temp.prev = null;
      }
      this.current.next = visited; // adds the new node as the 'next' for our current page
      visited.prev = this.current; // adds the current page as the 'prev' for our new page
      this.current = visited; // changes new page to become current page
    }

    back = (steps) => {
      for (let i = 0; i < steps; i++) { // iterates through the linked list steps number of times
        if (this.current.prev) { // makes sure to not go back more than the head
          this.current = this.current.prev; //changes the current page to the previous
        }
      }
      return this.current.url; //return current url
    }

    forward = (steps) => {
      for (let i = 0; i < steps; i++) { // iterates through the linked list steps number of times
        if (this.current.next) {  // makes sure to not go forward more than the tail
          this.current = this.current.next; // changes the current page to the next page
        }
      }
      return this.current.url; // returns the current url
    }
  }

  // Leetcode <--> Facebook <--> Google
  // 							^

  // back(1)

  // Leetcode <--> Facebook <--> Google
  // 			  ^

  // visit(LinkedIn)

  // Leetcode <--> Facebook <--> LinkedIn
                                // ^


  // this.homepage = leetcode; this.current = leetcode's node
  // this.current = google; this.current.prev = leetcode; leetcode.next = google
  // this.current = facebook; this.current.prev = google; google.next = facebook
  // this.current = youtube; this.current.prev = facebook; facebook.next = youtube
  // this.current = facebook
  // this.current = google
  // this.current = facebook
  // this.current = linkedin; this.current.prev = facebook; facebook.next = linkedin
  // this.current = linkedin
  // this.current = facebook
  // this.current = google


  // Example 1:
  // Input:
  // ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
  // [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
  // Output:
  // [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

  // var BrowserHistory = function(homepage) {

  // };


  /**
   * @param {string} url
   * @return {void}
   */
  // BrowserHistory.prototype.visit = function(url) {

  // };

  /**
   * @param {number} steps
   * @return {string}
   */
  // BrowserHistory.prototype.back = function(steps) {

  // };

  /**
   * @param {number} steps
   * @return {string}
   */
  // BrowserHistory.prototype.forward = function(steps) {

  // };

  /**
   * Your BrowserHistory object will be instantiated and called as such:
   * var obj = new BrowserHistory(homepage)
   * obj.visit(url)
   * var param_2 = obj.back(steps)
   * var param_3 = obj.forward(steps)
   */
