import { useRouter } from 'next/router'

const CourseDetails = () => {
  const router = useRouter()

  const id = router.query.id
  return <div>CourseDetails {id}</div>
}

export default CourseDetails
