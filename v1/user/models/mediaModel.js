
import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

const MediaSchema = new mongoose.Schema({
    file_type: { type: String, enum: ['image', 'audio', 'video', 'document'], required: true},
    file_name: { type: String},
    file_data: { type: Buffer },
    download_link: { type: String },
    uploaded_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    uploaded_at: { type: Date, default: new Date}
});

MediaSchema.plugin(timestamps);
MediaSchema.index({ "file_name": 1 }, { name: "unique for data" });

export const MediaModel = mongoose.model("Media", MediaSchema);
