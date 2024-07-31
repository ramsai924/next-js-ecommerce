'use client'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import MultipleSelector from '@/components/ui/multiSelect';
import { Button } from '@/components/ui/button';
import { productCreate } from '@/actions/products';
import { useFormState } from 'react-dom';
import { getCategoryList } from '@/actions/category';

function createProduct() {
  const [categories, setCategories] = useState<any[]>([])
  const [formState, formActions] = useFormState(productCreate, {
    error: '',
    success: false
  });

  const fetchCategories = async () => {
    try {
      const response = await getCategoryList()
      if(response && response?.length > 0){
        setCategories(
          response.map((category: any) => ({
            label: category.category,
            value: category._id
          }))
        )
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className='w-[100%] p-3 md:w-[40%] md:p-6 mx-auto '>
        <div className='p-6 text-center'>
            <p className='text-xl font-bold'>Create Product</p>
        </div>
        <hr />
        <form action={formActions} className='p-6 flex flex-col gap-4 border border-gray-1 rounded-md m-16'>
            <Input type="text" placeholder="Product Name" name="name" />
            <Input type="text" placeholder="Product Description"  name="description"/>
            <Input type="number" placeholder="Price"  name="price"/>
            <Input type="text" placeholder="Image URL"  name="imageSrc"/>
            <MultipleSelector placeholder='Select Category' name="categories" options={categories} />
            <div>
              {
                formState.error && <p>{formState.error}</p>
              }
            </div>
            <Button type='submit'>Create</Button>
        </form>
    </div>
  )
}

export default createProduct