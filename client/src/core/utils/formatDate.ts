export function formatDate(date: string): string {
    const convDate: Date = new Date(date);
    const year = convDate.getFullYear();
    const month = String(convDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    const day = String(convDate.getDate()).padStart(2, '0'); // Ensure two digits for day

    return `${year}/${month}/${day}`;
}