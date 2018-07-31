import { Class } from 'meteor/jagi:astronomy';
import {Comment} from "./comments";

const Videos = new Mongo.Collection('videos');


const Video = Class.create(
    {
        name: 'Video',
        collection: Videos,
        fields: {
            name: {
                type: String
            },
            comments: {
                type: [Object],
                transient: true
            }
        },

        events: {

            afterInit(e) {
                const doc = e.target;
                doc.comments = Comment.findOne();
            }
        }
    }
);

export {Video};