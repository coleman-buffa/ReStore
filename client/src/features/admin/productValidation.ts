import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string().required('Please provide a name'),
    brand: yup.string().required('Please select a brand'),
    type: yup.string().required('Please select a product type'),
    price: yup.number().required('Please enter a price').moreThan(100),
    quantityInStock: yup.number().required('Please enter quanity in stock').min(0),
    description: yup.string().required('Please provide a product description'),
    filename: yup.mixed().when('pictureUrl', {
        is: (value: string) => !value,
        then: yup.mixed().required('Please provide an image')
    })
})