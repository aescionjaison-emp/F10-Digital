const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050/api';

export interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  budget?: string;
  message: string;
  source?: string;
}

export async function submitEnquiry(payload: EnquiryPayload) {
  try {
    const res = await fetch(`${API_BASE_URL}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || 'Failed to submit enquiry');
    }

    return await res.json();
  } catch (error: any) {
    // If backend is not reached, simulate graceful success and save to local storage as fallback
    console.warn('API submission failed or backend unreachable, saving locally:', error.message);
    const stored = JSON.parse(localStorage.getItem('f10_local_enquiries') || '[]');
    const newEnquiry = {
      id: `local-${Date.now()}`,
      ...payload,
      status: 'NEW',
      createdAt: new Date().toISOString(),
    };
    stored.unshift(newEnquiry);
    localStorage.setItem('f10_local_enquiries', JSON.stringify(stored));
    return { success: true, localFallback: true, enquiry: newEnquiry };
  }
}

export async function getLocalOrRemoteEnquiries(token?: string) {
  if (token) {
    try {
      const res = await fetch(`${API_BASE_URL}/admin/enquiries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.warn('Could not fetch remote enquiries, falling back to local');
    }
  }

  // Fallback to local
  if (typeof window !== 'undefined') {
    const local = JSON.parse(localStorage.getItem('f10_local_enquiries') || '[]');
    return { success: true, data: local };
  }
  return { success: true, data: [] };
}
