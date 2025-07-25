import { type NextRequest, NextResponse } from "next/server"

// Mock data for demonstration
const courses = [
  {
    id: 1,
    title: "Dijital Dönüşüm Eğitimi",
    description: "Kamu kurumlarında dijital dönüşüm süreçleri ve uygulamaları",
    category: "Teknoloji",
    duration: "40 saat",
    participants: 156,
    completed: 89,
    status: "Aktif",
    startDate: "2024-01-15",
    instructor: "Dr. Ahmet Yılmaz",
    progress: 67,
  },
  {
    id: 2,
    title: "İş Güvenliği Eğitimi",
    description: "Temel iş güvenliği kuralları ve uygulamaları",
    category: "Güvenlik",
    duration: "16 saat",
    participants: 234,
    completed: 198,
    status: "Aktif",
    startDate: "2024-02-01",
    instructor: "Mühendis Fatma Demir",
    progress: 85,
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const category = searchParams.get("category")
    const status = searchParams.get("status")

    let filteredCourses = courses

    if (search) {
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (category) {
      filteredCourses = filteredCourses.filter((course) => course.category === category)
    }

    if (status) {
      filteredCourses = filteredCourses.filter((course) => course.status === status)
    }

    return NextResponse.json({
      success: true,
      data: filteredCourses,
      total: filteredCourses.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Eğitimler getirilemedi" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { title, description, category, duration, instructor } = body

    if (!title || !description || !category || !duration || !instructor) {
      return NextResponse.json({ success: false, error: "Gerekli alanlar eksik" }, { status: 400 })
    }

    const newCourse = {
      id: courses.length + 1,
      title,
      description,
      category,
      duration,
      instructor,
      participants: 0,
      completed: 0,
      status: "Başlayacak",
      startDate: new Date().toISOString().split("T")[0],
      progress: 0,
    }

    courses.push(newCourse)

    return NextResponse.json(
      {
        success: true,
        data: newCourse,
        message: "Eğitim başarıyla oluşturuldu",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Eğitim oluşturulamadı" }, { status: 500 })
  }
}
