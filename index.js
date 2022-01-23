function distanceFromHqInBlocks(pickup) {
    const hq = 42;
    const distance = Math.abs(pickup - hq);
    return distance;
}

function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    return (blocks * 264);
}

function distanceTravelledInFeet(pickup, hq) {
    const feetPerblock = 264
    const distanceTravelledInFeet = Math.abs((pickup - hq) * feetPerblock);
    return distanceTravelledInFeet;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const farePrice = distance - 400;
    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return farePrice * .02
    } else if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25; 
    }
}