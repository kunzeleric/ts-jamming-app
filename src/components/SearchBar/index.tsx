/* eslint-disable @typescript-eslint/no-misused-promises */
import { SearchFormContainer } from "./styles"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { MagnifyingGlass } from "phosphor-react"
import { useContext } from "react"
import { SongsContext } from "../../context/SongsContext"

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export const SearchBar = () => {
  const { fetchData } = useContext(SongsContext)

  const { register, handleSubmit, formState: { isSubmitting }, reset} = useForm<SearchFormInput>({resolver: zodResolver(searchFormSchema)})

  async function handleSearchSongs(data: SearchFormInput) {
    await fetchData(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchSongs)}>
      <input 
        type="text" 
        placeholder="Search here!" 
        required 
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        Search
        <MagnifyingGlass size={22} weight="bold" />
      </button>
    </SearchFormContainer>
  )
}
