# TCP vs. UDP Servers

## TCP (Transmission Control Protocol)

TCP is a protocol in the transport layer used for reliable data transmission between servers and clients. It comes with several advantages:

### Pros:

- **Acknowledgment (ACK):**
  - When the client receives a TCP segment successfully, it sends an acknowledgment (ACK) back to the server.
  - The ACK contains the next expected sequence number, indicating the client's readiness to receive the next segment.
  - If segments arrive out of order or are missing, the client delays sending ACKs until they arrive in the correct order.

- **Guaranteed Delivery:**
  - TCP ensures reliable data transmission.
  - If the server doesn't receive an ACK within a certain timeout or receives duplicate ACKs, it retransmits unacknowledged segments to prevent data loss.

- **Connection-Based:**
  - TCP establishes a dedicated communication channel between the server and client.
  - This connection remains open throughout their interaction, ensuring data integrity and orderly communication.

- **Congestion Control:**
  - TCP monitors data flow and adjusts transmission speed to prevent congestion.
  - It requests retransmission of lost data and ensures a smooth flow of information.

- **Ordered Packets:**
  - TCP ensures that data packets arrive at the destination in the correct order, maintaining data integrity even if they were transmitted out of order.

### Cons:

- **Larger Packets:**
  - TCP adds overhead to packets, including sequence numbers and ACKs, making them larger.

- **More Bandwidth:**
  - Due to larger packets, TCP consumes more bandwidth.

- **Slower than UDP:**
  - TCP's features, including ACKs and ordered packets, introduce some latency compared to UDP.

- **Stateful:**
  - TCP connections require state management, and if the server crashes, clients may encounter issues.

## UDP (User Datagram Protocol)

UDP is another transport layer protocol, but it differs from TCP in several ways:

### Cons:

- **No Acknowledgment:**
  - UDP does not provide acknowledgment of data receipt.

- **No Guaranteed Delivery:**
  - Data sent via UDP may not reach the destination.

- **Connectionless:**
  - UDP does not establish a dedicated connection between sender and receiver.

- **No Congestion Control:**
  - UDP doesn't manage congestion, potentially leading to data loss.

- **No Ordered Packets:**
  - UDP packets may arrive out of order.

### Pros:

- **Smaller Packets:**
  - UDP packets are smaller because they lack TCP's additional headers, making them efficient for low-bandwidth and real-time applications.

- **Less Bandwidth:**
  - Smaller packets result in less bandwidth consumption.

- **Faster than TCP:**
  - UDP doesn't wait for acknowledgments, making it faster for certain applications like gaming.

- **Stateless:**
  - UDP is stateless, allowing clients to continue working naturally even if the server is interrupted.
