TF1200 Recipe Logger Extension


**Overview**

This project implements a custom TF1200 UI Client extension that captures Teach and Activate recipe actions from a TwinCAT HMI project and logs them into a timestamped file using a Node.js backend.

It demonstrates frontend–backend IPC communication inside TF1200 and real-time integration with a published TwinCAT HMI runtime.

**Architecture**

HMI Web Page (Renderer)
↓
TF1200 Electron Main Process
↓
Node.js Extension Backend
↓
recipe-log.txt file

**Features**

Logs Teach Recipe actions

Logs Activate Recipe actions

Extracts selected recipe value from HMI Combobox

Generates ISO timestamp entries

Uses __dirname for portable file storage

Modular extension structure
