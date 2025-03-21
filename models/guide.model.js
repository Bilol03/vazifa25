import { mongoose } from 'mongoose'

let GuideSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		experience: { type: Number, default: 0 },
		phoneNumber: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
		timestamps: true,
	},
)

GuideSchema.virtual('tours', {
	ref: 'tours',
	localField: '_id',
	foreignField: 'guides',
})

let guides = mongoose.model('guides', GuideSchema)
export default guides
