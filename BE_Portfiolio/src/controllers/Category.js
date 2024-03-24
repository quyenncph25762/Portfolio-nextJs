import Category from "../models/Category"
import Project from "../models/Project"

export const addCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body)
        if (!category) {
            return res.status(400).json({
                message: "Them khong thanh cong"
            })
        }
        return res.status(201).json({
            message: "Them thanh cong",
            category
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find()
        if (!category || category.length <= 0) {
            return res.status(400).json({
                message: "khong tim thay Category"
            })
        }
        return res.status(201).json(
            category
        )
    } catch (error) {
        console.log(error)
    }
}
export const getOneCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        if (!category) {
            return res.status(400).json({
                message: "khong tim thay Category"
            })
        }
        return res.status(201).json(
            category
        )
    } catch (error) {
        console.log(error)
    }
}
export const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        let undefinedCategory = await Category.findOne({ name: "Chưa phân loại" });

        if (!undefinedCategory) {
            undefinedCategory = await Category.create({ name: "Chưa phân loại", images: {} });
        }
        const productsToUpdate = await Project.find({ categoryId: categoryId });

        await Category.findByIdAndUpdate(undefinedCategory._id, {
            $push: {
                products: {
                    $each: productsToUpdate.map((product) => product._id),
                },
            },
        });
        const category = await Category.findByIdAndDelete(req.params.id)

        if (undefinedCategory) {
            await Product.updateMany(
                { categoryId },
                { categoryId: undefinedCategory._id }
            );
        }

        if (!category) {
            return res.status(400).json({
                message: "Xóa không thành công!",
            });
        }
        return res.status(200).json(
            category,
        );
    } catch (error) {
        console.log(error)
    }
}
export const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!category) {
            return res.status(400).json({
                message: "khong tim thay Category"
            })
        }
        return res.status(201).json(
            {
                message: "sua thanh cong",
                category
            }
        )
    } catch (error) {
        console.log(error)
    }
}