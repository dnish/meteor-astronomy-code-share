

const Videos = new Mongo.Collection('videos');


const videoObj = {
    name: 'Video',
    collection: Videos,
    fields: {
        name: {
            type: String
        }
    },

    helpers: {
        canRelease() {
            return Video.find({name}).count() < 1;
        }
    }
};

export {videoObj};