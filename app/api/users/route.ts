import { type NextRequest, NextResponse } from "next/server"

// Mock data for demonstration
const users = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@kurum.gov.tr",
    department: "İnsan Kaynakları",
    role: "Yönetici",
    status: "Aktif",
    joinDate: "2024-01-15",
    completedCourses: 12,
  },
  {
    id: 2,
    name: "Fatma Demir",
    email: "fatma.demir@kurum.gov.tr",
    department: "Bilgi İşlem",
    role: "Uzman",
    status: "Aktif",
    joinDate: "2024-02-20",
    completedCourses: 8,
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const department = searchParams.get("department")
    const status = searchParams.get("status")

    let filteredUsers = users

    if (search) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (department) {
      filteredUsers = filteredUsers.filter((user) => user.department === department)
    }

    if (status) {
      filteredUsers = filteredUsers.filter((user) => user.status === status)
    }

    return NextResponse.json({
      success: true,
      data: filteredUsers,
      total: filteredUsers.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Kullanıcılar getirilemedi" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, department, role } = body

    if (!name || !email || !department || !role) {
      return NextResponse.json({ success: false, error: "Gerekli alanlar eksik" }, { status: 400 })
    }

    // Check if email already exists
    const existingUser = users.find((user) => user.email === email)
    if (existingUser) {
      return NextResponse.json({ success: false, error: "Bu e-posta adresi zaten kullanılıyor" }, { status: 409 })
    }

    // Create new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      department,
      role,
      status: "Aktif",
      joinDate: new Date().toISOString().split("T")[0],
      completedCourses: 0,
    }

    users.push(newUser)

    return NextResponse.json(
      {
        success: true,
        data: newUser,
        message: "Kullanıcı başarıyla oluşturuldu",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Kullanıcı oluşturulamadı" }, { status: 500 })
  }
}
