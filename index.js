// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue){ // function that takes in drivers/revenue
    return driversWithRevenueOver(drivers, revenue).map(function(driver){ // take whats already been done above, and map out each name that has bigger revenue than the input revenue.
        return driver.name;
    });
}

function exactMatch(drivers, driverObject){
    return drivers.filter(function(driver){
        let match = 0;

        for (const key in driverObject){
            match = driver[key] === driverObject[key];
        }

        return match;
    });
}

function exactMatchToList(drivers, driverObject){
    return exactMatch(drivers, driverObject).map(function(driver){ // pulls from the already "matched by key" function and pulls out their NAME.
        return driver.name;
    });
}