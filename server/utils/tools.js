
const userOwnerShip = (req, valueToCompare) => {
    if(req._id.toString() !== valueToCompare.toString()){
        return false;
    }
    return true;
}

module.exports = {
    userOwnerShip
}