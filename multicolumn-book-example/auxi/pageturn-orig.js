function changeColumns(changeValue,arrowLink) {
    if (changeValue > 0) changeValue = 0;
// we have defined "changeValue" as "1" for "Previous", and "-1" for "Next"
// but if the user clicks on the "Previous" button when on the first "page", nothing should move
    if ((/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) || (/MSIE (\d+\.\d+);/.test(navigator.userAgent))){
// test for Opera and IE;
         addedValue = changeValue*(820 - 2);
// this is because of the fact that the multi-column JS subtracts 1px for column width
    }
    else {
         addedValue = changeValue*820;
// for a two-column layout, we want the columns to move two by two
// therefore, we need to move by 2*330px (two columns)
// but also by 2*80px (twice the column gap,
// between the 1st and 2nd, and between the 2nd and 3rd column)
    }
    newValue = addedValue;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
        document.getElementById("columnified").style.marginLeft = newValue + 'px';
// this moves the "columnified" div, a multiple of 820px at a time
// therefore if the user clicks on "next" once, "margin-left = -820px"
// now, we want to update the changeValue to reflect the change:
        if (arrowLink == 'next') {
            totalChanges = changeValue - 1;
            document.getElementById('anext').onclick = function () { changeColumns(totalChanges,'next'); }
            secondChanges = totalChanges + 2;
            document.getElementById('aprevious').onclick = function () { changeColumns(secondChanges,'previous'); }
            if (secondChanges < 1) { document.getElementById('previous').style.visibility = "visible"; document.getElementById('flip-left').style.display = "block"; }
            else { document.getElementById('previous').style.visibility = "hidden";  setTimeout("document.getElementById('flip-left').style.display = 'none'", 1000); }
// here, we're hiding the "Previous" button if on the first "page"
        }
        if (arrowLink == 'previous') {
            totalChanges = changeValue + 1;
            document.getElementById('aprevious').onclick = function () { changeColumns(totalChanges,'previous'); }
            secondChanges = totalChanges - 2;
            document.getElementById('anext').onclick = function () { changeColumns(secondChanges,'next'); }
            if (totalChanges < 1) { document.getElementById('previous').style.visibility = "visible"; document.getElementById('flip-left').style.display = "block"; }
            else { document.getElementById('previous').style.visibility = "hidden";  setTimeout("document.getElementById('flip-left').style.display = 'none'", 1000); }
        }
    }
    else {
// for non-IE browsers (IE does this animation in a sluggish way)
        if (newValue + 8200 > 0) {
// I make the assumption that no page of mine will be more than 20 columns long,
// so no need to add animation beyond that point
            fade('article', 100, 1, 500);
            fade('nav', 100, 1, 500);
            if (arrowLink == 'next') {
                fade('flip-left', 100, 1, 500);
            }
            if (arrowLink == 'previous') {
                fade('flip-right', 100, 1, 500);
            }
// this fades the "columniser" div to 10% opacity
// when the user sets the animation in motion
// note: this "columniser" div does not appear
// in IE browsers, to avoid non-useful DIVs there
        }
        setTimeout(function(){pageFlip(arrowLink)},250);
        setTimeout(function(){animateSlide(newValue,1,20,arrowLink,changeValue)}, 1000);
        if (arrowLink == 'next') {
            totalChanges = changeValue - 1;
            document.getElementById('anext').onclick = function () { changeColumns(totalChanges,'next'); }
            secondChanges = totalChanges + 2;
            document.getElementById('aprevious').onclick = function () { changeColumns(secondChanges,'previous'); }
            if (secondChanges < 1) { document.getElementById('previous').style.visibility = "visible"; document.getElementById('flip-left').style.display = "block"; }
            else { document.getElementById('previous').style.visibility = "hidden";  setTimeout("document.getElementById('flip-left').style.display = 'none'", 1000); }
        }
        if (arrowLink == 'previous') {
            totalChanges = changeValue + 1;
            document.getElementById('aprevious').onclick = function () { changeColumns(totalChanges,'previous'); }
            secondChanges = totalChanges - 2;
            document.getElementById('anext').onclick = function () { changeColumns(secondChanges,'next'); }
            if (totalChanges < 1) { document.getElementById('previous').style.visibility = "visible"; document.getElementById('flip-left').style.display = "block"; }
            else { document.getElementById('previous').style.visibility = "hidden"; setTimeout("document.getElementById('flip-left').style.display = 'none'", 1000); }
        }
    }
}

function pageFlip(arrowLink)
{
    if (arrowLink == 'next') {
        var right1 = document.getElementById('right1').style;
        right1.webkitTransformOrigin = right1.MozTransformOrigin = right1.OTransformOrigin = right1.transformOrigin = '200px 0px';
        right1.webkitTransform = right1.MozTransform = right1.OTransform = right1.transform = 'translate(-864px, -534px) rotate(0deg)'; /* translate-y = height - 80 */
        var right3 = document.getElementById('right3').style;
        var right4 = document.getElementById('right4').style;
        right3.webkitTransformOrigin = right3.MozTransformOrigin = right3.OTransformOrigin = right3.transformOrigin = right4.webkitTransformOrigin = right4.MozTransformOrigin = right4.OTransformOrigin = right4.transformOrigin = '216px 0';
        right3.webkitTransform = right3.MozTransform = right3.OTransform = right3.transform = 'translate(432px, 584px) rotate(0deg)'; /* translate-y = height - 30 */
        right4.webkitTransform = right4.MozTransform = right4.OTransform = right4.transform = 'translate(0, 0) rotate(0deg)';
    }
    if (arrowLink == 'previous') {
        var left1 = document.getElementById('left1').style;
        left1.webkitTransformOrigin = left1.MozTransformOrigin = left1.OTransformOrigin = left1.transformOrigin = '648px 0';
        left1.webkitTransform = left1.MozTransform = left1.OTransform = left1.transform = 'translate(432px, -534px) rotate(0deg)';
        var left3 = document.getElementById('left3').style;
        var left4 = document.getElementById('left4').style;
        left3.webkitTransformOrigin = left3.MozTransformOrigin = left3.OTransformOrigin = left3.transformOrigin = left4.webkitTransformOrigin = left4.MozTransformOrigin = left4.OTransformOrigin = left4.transformOrigin = '216px 0';
        left3.webkitTransform = left3.MozTransform = left3.OTransform = left3.transform = 'translate(0px, 584px) rotate(0deg)';
        left4.webkitTransform = left4.MozTransform = left4.OTransform = left4.transform = 'translate(0, 0) rotate(0deg)';
    }
}
function clearFlip(arrowLink)
{
    if (arrowLink == 'next') {
        var right1 = document.getElementById('right1').style;
        var right3 = document.getElementById('right3').style;
        var right4 = document.getElementById('right4').style;
        right1.webkitTransformOrigin = right1.MozTransformOrigin = right1.OTransformOrigin = right1.transformOrigin = right1.webkitTransform = right1.MozTransform = right1.OTransform = right1.transform = right3.webkitTransformOrigin = right3.MozTransformOrigin = right3.OTransformOrigin = right3.transformOrigin = right4.webkitTransformOrigin = right4.MozTransformOrigin = right4.OTransformOrigin = right4.transformOrigin = right3.webkitTransform = right3.MozTransform = right3.OTransform = right3.transform = right4.webkitTransform = right4.MozTransform = right4.OTransform = right4.transform = '';
    }
    if (arrowLink == 'previous') {
        var left1 = document.getElementById('left1').style;
        var left3 = document.getElementById('left3').style;
        var left4 = document.getElementById('left4').style;
        left1.webkitTransformOrigin = left1.MozTransformOrigin = left1.OTransformOrigin = left1.transformOrigin = left1.webkitTransform = left1.MozTransform = left1.OTransform = left1.transform = left3.webkitTransformOrigin = left3.MozTransformOrigin = left3.OTransformOrigin = left3.transformOrigin = left4.webkitTransformOrigin = left4.MozTransformOrigin = left4.OTransformOrigin = left4.transformOrigin = left3.webkitTransform = left3.MozTransform = left3.OTransform = left3.transform = left4.webkitTransform = left4.MozTransform = left4.OTransform = left4.transform = '';
    }
}

function animateSlide(newValue, iteration, stepLength, arrowLink,changeValue)
{
    if (iteration < 25)
        {
            iteration++;
            setTimeout(function(){animateSlide(newValue,iteration,stepLength,arrowLink,changeValue)}, 3);
        }
        else {
            document.getElementById("columniser").style.marginLeft = newValue + 'px';
            if (newValue + 8000 > 0) {
                if (arrowLink == 'next') {
                    fade('flip-right', 100, 1, 500);
                    document.getElementById("flip-right").style.display = 'none';
                }
                if (arrowLink == 'previous') {
                    fade('flip-left', 100, 1, 500);
                    document.getElementById("flip-left").style.display = 'none';
                }
                fade('article', 1, 100, 500);
                fade('nav', 1, 100, 500);
            }
            setTimeout(function(){clearFlip(arrowLink)},100);
            if (arrowLink == 'next') {
                setTimeout("document.getElementById('flip-right').style.display = 'block'",800);
                setTimeout(function(){fade('flip-right', 1, 100, 200)},800);
                setTimeout(function(){fade('flip-left', 1, 100, 200)},800);
            }
            if (arrowLink == 'previous') {
                totalChanges = changeValue + 1;
                if (totalChanges < 1) {
                    setTimeout("document.getElementById('flip-left').style.display = 'block'",800);
                    setTimeout(function(){fade('flip-left', 1, 100, 200)},800);
                    setTimeout(function(){fade('flip-right', 1, 100, 200)},800);
                } else {
                    setTimeout(function(){fade('flip-left', 1, 100, 0)},800);
                    setTimeout(function(){fade('flip-right', 1, 100, 200)},800);
                    setTimeout("document.getElementById('flip-left').style.display = 'none'",800);
                }
            }
        }
}



function changeColumns2(changeValue,arrowLink) {
    if (changeValue > 0) changeValue = 0;
// we have defined "changeValue" as "1" for "Previous", and "-1" for "Next"
// but if the user clicks on the "Previous" button when on the first "page", nothing should move
    if ((/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) || (/MSIE (\d+\.\d+);/.test(navigator.userAgent))){
// test for Opera and IE;
         addedValue = changeValue*(820 - 2);
// this is because of the fact that the multi-column JS subtracts 1px for column width
    }
    else {
         addedValue = changeValue*820;
// for a two-column layout, we want the columns to move two by two
// therefore, we need to move by 2*330px (two columns)
// but also by 2*60px (twice the column gap,
// between the 1st and 2nd, and between the 2nd and 3rd column)
    }
    newValue = addedValue;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
        document.getElementById("columnifiedtwo").style.marginLeft = newValue + 'px';
// this moves the "columnified" div, a multiple of 780px at a time
// therefore if the user clicks on "next" once, "margin-left = -780px"
// now, we want to update the changeValue to reflect the change:
        if (arrowLink == 'next') {
            totalChanges = changeValue - 1;
            document.getElementById('anexttwo').onclick = function () { changeColumns2(totalChanges,'next'); }
            secondChanges = totalChanges + 2;
            document.getElementById('aprevioustwo').onclick = function () { changeColumns2(secondChanges,'previous'); }
            if (secondChanges < 1) { document.getElementById('previoustwo').style.visibility = "visible"; }
            else { document.getElementById('previoustwo').style.visibility = "hidden"; }
// here, we're hiding the "Previous" button if on the first "page"
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
    else {
// for non-IE browsers (IE does this animation in a sluggish way)
        if (newValue + 8200 > 0) {
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
}

function animateSlide2(newValue, iteration, stepLength, arrowLink)
{
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
// the animation in Opera wasn't optimal either, so I made it go faster
        if (iteration < 13)
        {
            if (arrowLink == 'next') {
                slidingMargin = newValue + 60 * (13 - iteration);
            }
            if (arrowLink == 'previous') {
                slidingMargin = newValue - 60 * (13 - iteration);
            }
            document.getElementById("columnisertwo").style.marginLeft = slidingMargin + 'px';
            iteration++;
            setTimeout(function(){animateSlide2(newValue,iteration,stepLength,arrowLink)}, 3);
        }
        else {
            document.getElementById("columnisertwo").style.marginLeft = newValue + 'px';
            if (newValue + 8200 > 0) {
                fade('columnisertwo', 50, 100, 500);
// just as we reduced opacity to 50% at the beginning of the animation,
// so we must put it back to 100% after the animation
            }
        }
    }
    else {
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
            if (newValue + 8200 > 0) {
                fade('columnisertwo', 50, 100, 500);
            }
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