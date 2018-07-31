import { Class } from 'meteor/jagi:astronomy';

const Comments = new Mongo.Collection('comments');


const Comment = Class.create({
    name: 'Comment',
    collection: Comments,
    fields: {
        name: {
            type: String
        }
    },

});

export {Comment};