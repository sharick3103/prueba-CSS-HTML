
const textButton = document.getElementById("btn-change-text");
const paragraph  = document.getElementById("first");

let textExpanded = false;

if (textButton && paragraph) {
    textButton.addEventListener("click", function () {
        if (textExpanded === false) {
            paragraph.textContent = "Guns N' Roses is an iconic American hard rock band formed in Los Angeles in 1985.";
            textButton.textContent = "Read more";
            textExpanded = true;
        } else {
            paragraph.textContent = "The classic lineup, consisting of Axl Rose, Slash, Izzy Stradlin, Duff McKagan, and Steven Adler, achieved international stardom with the release of their debut album, Appetite for Destruction, in 1987. This album remains the best-selling debut in U.S. history, featuring legendary tracks like Welcome to the Jungle, Paradise City, and Sweet Child O' Mine. Known for their raw energy and dangerous reputation, they dominated the rock scene in the late 80s and early 90s, later releasing the ambitious twin albums Use Your Illusion I and II in 1991. After a long period of internal conflict and lineup changes, the band's core members reunited in 2016 for the Not in This Lifetime... Tour. Today, they continue to perform worldwide as one of the most influential acts in rock history.";
            textButton.textContent = "Read less";
            textExpanded = false;
        }
    });
}


