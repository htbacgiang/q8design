export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ status: 'error', err: 'Method not allowed' });
  }

  try {
    const locations = [
      {
        id: 'CS1',
        name: 'CS1 - Hà Nội',
        address: '19 Nguyễn Gia Thiều, Hoàn Kiếm',
        city: 'Hà Nội',
        description: 'Cơ sở chính tại Hà Nội'
      },
      {
        id: 'CS2', 
        name: 'CS2 - Thái Nguyên',
        address: 'Tòa nhà Viettel, Số 4 Hoàng Văn Thụ',
        city: 'Thái Nguyên',
        description: 'Cơ sở tại Thái Nguyên'
      }
    ];

    res.json({
      status: 'success',
      locations,
      result: locations.length
    });
  } catch (err) {
    console.error('Error fetching locations:', err);
    return res.status(500).json({ status: 'error', err: 'Error fetching locations' });
  }
};