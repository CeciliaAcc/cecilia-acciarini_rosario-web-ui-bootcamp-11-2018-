import Movie from "movie.js";
import Actor from "actor.js";
import EventEmitter from "evenEmitter.js";
import Logger from "logger.js";


var movieBTFI = new Movie('Back to the Future I', 1985, 116);
var principalActor = new Actor('Michael J. Fox', 57);
var logger = new Logger();
var moreActors = {
    secondActor : new Actor('Christopher Lloyd', 80),
    otherActor : new Actor('Lea Thompson', 57),
}

movieBTFI.addCast(moreActors);
movieBTFI.addCast('Michael J. Fox');
movieBTFI.on('play',logger.log);
movieBTFI.off('play');
movieBTFI.play();
console.log(movieBTFI.actor);
var movieBTFII = new Movie('Back to the Future II',1989,108);
console.log(movieBTFII);
Object.assign(movieBTFII,social);
movieBTFII.share('Cecilia Acciarini');