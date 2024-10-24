import { PageWrapper } from '@/components/PageWrapper'
import { Filter } from '@/components/Filter'
import { ListMovies } from '@/components/ListMovies'

function App() {
  return (
    <PageWrapper>
      <main className='container grid grid-cols-12 sm:gap-x-8 gap-y-4 mx-auto'>
        <div className='col-span-12 md:col-span-3'>
          <Filter />
        </div>

        <div className='col-span-12 sm:col-span-9'>
          <ListMovies />
        </div>
      </main>
    </PageWrapper>
  )
}

export default App
