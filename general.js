if (typeof href === 'undefined' || typeof hrefTarget === 'undefined') {
    const href = document.querySelectorAll("td.cell-forum > div.forum-wrapper > div > a");
    const hrefTarget = document.querySelectorAll("td.cell-forum");
    
    for (let index = 0; index < hrefTarget.length; index++) {
        hrefTarget[index].setAttribute("onclick", "window.location=" + "'"+ href[index] + "'");
    }
}

if (typeof topicLink === 'undefined' || typeof topicTarget === 'undefined') {
    const topicLink = document.querySelectorAll(".topic-item .topic-wrapper .topic-title");
    const topicTarget = document.querySelectorAll(".cell-topic");
    
    for (let index = 0; index < topicTarget.length; index++) {
        topicTarget[index].setAttribute("onclick", "window.location=" + "'"+ topicLink[index] + "'");
    }
}

/** Copyright (c) 2020 luffyshack@gmail.com */