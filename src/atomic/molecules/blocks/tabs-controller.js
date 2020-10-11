export const TabsController = {
  currentIndex: 0,
  lastIndex: 0,
  getNextIndex: function () {
    return ++this.lastIndex;
  },
  decideVisibility: function (index) {
    return this.currentIndex === index ? "visible" : "hidden";
  },
  setCurrentState: function (index) {
    this.currentIndex = index;
  },
  getLastIndex: function () {
    return this.lastIndex;
  },
};
