
export default class Movie extends EventEmitter{

        constructor(name, year, duration){
            this.title = name;
            this.year = year;
            this.duration = duration;
            this.cast = {};
        }

        play(){
            this.emit('play');
        }

        pause(){
            this.emit('pause');
        }

        resume(){
            this.emit('resume');
        }

        addCast(cast){
            this.cast = cast;
        }
}

