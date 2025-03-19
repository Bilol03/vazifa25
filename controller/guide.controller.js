import guideSchema from "../models/guide.model.js"
let postGuide = async(req, res) => {
    let {name, experience, phoneNumber} = req.body
    if (!name || !experience || !phoneNumber) throw new Error("Ma'lumotlar to'liq kiritilmagan")
    let data = await guideSchema.create({name, experience, phoneNumber})

    res.status(201).json({message: "Success", data})
}

let getGuides = async(req, res) => {
    let data = await guideSchema.find()
    res.send(data)
}

export default {
    postGuide,
    getGuides
}