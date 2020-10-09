
export const TabsController = {
    currentIndex: 0,
    lastIndex: 0,
    getNextIndex: function () {
        console.log(this);
        return ++this.lastIndex;
    },
    decideVisibility: function(index) {
        console.log(this);
        return (this.currentIndex === index) ? "visible" : "hidden";
    },
    setCurrentState: function(index) {
        this.currentIndex = index;
    },
    getLastIndex: function () {
        return this.lastIndex;
    }
};