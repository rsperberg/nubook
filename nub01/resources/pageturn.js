
function changeColumns2(changeValue,arrowLink) {
    if (changeValue > 0) changeValue = 0;
// we have defined "changeValue" as "1" for "Previous", and "-1" for "Next"
// but if the user clicks on the "Previous" button when on the first "page", nothing should move

         addedValue = changeValue*768;
// for a two-column layout, we want the columns to move two by two
// therefore, we need to move by 2*330px (two columns)
// but also by 2*60px (twice the column gap,
// between the 1st and 2nd, and between the 2nd and 3rd column)

    newValue = addedValue;

// for non-IE browsers (IE does this animation in a sluggish way)
        if (newValue + 15200 > 0) {
// I make the assumption that no page of mine will be more than 20 columns long,
// so no need to add animation beyond that point
            fade('columnisertwo', 100, 50, 500);
// this fades the "columniser" div to 50% opacity
// when the user sets the animation in motion
// note: this "columniser" div does not appear
// in IE browsers, to avoid non-useful DIVs there
        }
        setTimeout(function(){animateSlide2(newValue,1,20,arrowLink)}, 250);
        if (arrowLink == 'next') {
            totalChanges = changeValue - 1;
            document.getElementById('anexttwo').onclick = function () { changeColumns2(totalChanges,'next'); }
            secondChanges = totalChanges + 2;
            document.getElementById('aprevioustwo').onclick = function () { changeColumns2(secondChanges,'previous'); }
            if (secondChanges < 1) { document.getElementById('previoustwo').style.visibility = "visible"; }
            else { document.getElementById('previoustwo').style.visibility = "hidden"; }
        }
        if (arrowLink == 'previous') {
            totalChanges = changeValue + 1;
            document.getElementById('aprevioustwo').onclick = function () { changeColumns2(totalChanges,'previous'); }
            secondChanges = totalChanges - 2;
            document.getElementById('anexttwo').onclick = function () { changeColumns2(secondChanges,'next'); }
            if (totalChanges < 1) { document.getElementById('previoustwo').style.visibility = "visible"; }
            else { document.getElementById('previoustwo').style.visibility = "hidden"; }
        }
}



function animateSlide2(newValue, iteration, stepLength, arrowLink)
{
        if (iteration < 26)
        {
            if (arrowLink == 'next') {
                slidingMargin = newValue + 30 * (26 - iteration);
            }
            if (arrowLink == 'previous') {
                slidingMargin = newValue - 30 * (26 - iteration);
            }
            document.getElementById("columnisertwo").style.marginLeft = slidingMargin + 'px';
            iteration++;
            setTimeout(function(){animateSlide2(newValue,iteration,stepLength,arrowLink)}, 3);
        }
        else {
            document.getElementById("columnisertwo").style.marginLeft = newValue + 'px';
            if (newValue + 15200 > 0) {
                fade('columnisertwo', 50, 100, 500);
            }
        }
}


function setOpacity(eID, opacityLevel) {
    var eStyle = document.getElementById(eID).style;
    eStyle.opacity = opacityLevel / 100;
    eStyle.filter = 'alpha(opacity='+opacityLevel+')';
}
function fade(eID, startOpacity, stopOpacity, duration) {
    var speed = Math.round(duration / 100);
    var timer = 0;
    if (startOpacity < stopOpacity){ // fade in
        for (var i=startOpacity; i<=stopOpacity; i++) {
            setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
            timer++;
        } return;
    }
    for (var i=startOpacity; i>=stopOpacity; i--) { // fade out
        setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
        timer++;
    }
}