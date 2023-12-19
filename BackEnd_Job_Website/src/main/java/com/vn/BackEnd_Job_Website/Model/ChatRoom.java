package com.vn.BackEnd_Job_Website.Model;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class ChatRoom {
    @Id
    @Column(name = "ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ChatID", length = 50)
    private String chatID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_1")
    private Account user1;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_2")
    private Account user2;

}